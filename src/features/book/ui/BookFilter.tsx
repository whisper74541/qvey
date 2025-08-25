import { useState } from 'react'

export interface BookFilterProps {
    onChange: (keywords: string[]) => void
}

function BookFilter({ onChange }: BookFilterProps) {
    const [selected, setSelected] = useState<string[]>([])

    const toggleKeyword = (keyword: string) => {
        const updated = selected.includes(keyword) ? selected.filter((k) => k !== keyword) : [...selected, keyword]
        setSelected(updated)
        onChange(updated)
    }

    return (
        <div>
            <button onClick={() => toggleKeyword('프론트엔드')}>프론트엔드</button>
            <button onClick={() => toggleKeyword('백엔드')}>백엔드</button>
            <button onClick={() => toggleKeyword('알고리즘')}>알고리즘</button>
        </div>
    )
}

export default BookFilter
