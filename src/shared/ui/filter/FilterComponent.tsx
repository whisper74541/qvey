import React, { useEffect, useMemo, useState } from 'react'
import styles from './FilterComponent.module.css'
import type { FilterComponentProps } from './types'

const FilterComponent: React.FC<FilterComponentProps> = ({
    options,
    mode = 'multi',
    variant = 'tag',
    value, // controlled
    defaultValue, // uncontrolled initial
    onChange,
    showCount = true,
    clearable = true,
    className,
}) => {
    const isControlled = value !== undefined
    const [internal, setInternal] = useState<string[]>(defaultValue ?? [])
    const selected = (isControlled ? value : internal) ?? []

    // 외부에서 defaultValue가 바뀌면 초기화 (uncontrolled)
    useEffect(() => {
        if (!isControlled && defaultValue) setInternal(defaultValue)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue])

    const setSelected = (next: string[]) => {
        if (!isControlled) setInternal(next)
        onChange?.(next)
    }

    const toggle = (id: string) => {
        if (mode === 'single') {
            setSelected(selected.includes(id) ? [] : [id])
            return
        }
        // multi
        if (selected.includes(id)) {
            setSelected(selected.filter((v) => v !== id))
        } else {
            setSelected([...selected, id])
        }
    }

    const clearAll = () => setSelected([])

    const headerRight = (
        <div className={styles.actions}>
            {showCount && <span className={styles.count}>선택됨: {selected.length}</span>}
            {clearable && (
                <button type="button" className={styles.clearButton} onClick={clearAll}>
                    Clear All
                </button>
            )}
        </div>
    )

    const renderTag = () => (
        <div className={styles.list}>
            {options.map((opt) => {
                const active = selected.includes(opt.id)
                return (
                    <button
                        key={opt.id}
                        type="button"
                        className={`${styles.item} ${active ? styles.itemActive : ''}`}
                        aria-pressed={active}
                        onClick={() => toggle(opt.id)}
                    >
                        {opt.label}
                    </button>
                )
            })}
        </div>
    )

    const renderChecks = () => (
        <div className={styles.checkList}>
            {options.map((opt) => (
                <label key={opt.id} className={styles.checkItem}>
                    <input
                        type={mode === 'single' ? 'radio' : 'checkbox'}
                        name="filter-check"
                        value={opt.id}
                        checked={selected.includes(opt.id)}
                        onChange={() => toggle(opt.id)}
                    />
                    {opt.label}
                </label>
            ))}
        </div>
    )

    const renderSelect = () => (
        <div className={styles.selectWrap}>
            <select
                className={styles.select}
                multiple={mode === 'multi'}
                value={selected}
                onChange={(e) => {
                    if (mode === 'multi') {
                        const vals = Array.from(e.currentTarget.selectedOptions).map((o) => o.value)
                        setSelected(vals)
                    } else {
                        setSelected([e.currentTarget.value])
                    }
                }}
            >
                {options.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )

    const body = useMemo(() => {
        if (variant === 'checkbox') return renderChecks()
        if (variant === 'select') return renderSelect()
        return renderTag() // default: 'tag'
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variant, options, selected, mode])

    return (
        <div className={`${styles.container} ${className ?? ''}`}>
            <div className={styles.header}>
                <span className={styles.title}>필터</span>
                {headerRight}
            </div>
            {body}
        </div>
    )
}

export default FilterComponent
