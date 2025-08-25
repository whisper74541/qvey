// export type FilterId = string

// export type FilterOption = {
//     id: FilterId
//     label: string
//     value?: string
//     disabled?: boolean
//     count?: number // 옵션 옆 배지 숫자(선택 사항)
// }

// export type FilterMode = 'single' | 'multi'
// export type FilterVariant = 'tag' | 'checkbox' | 'dropdown'

// export type FilterProps = {
//     options: FilterOption[]
//     mode?: FilterMode // 기본: 'multi'
//     // 제어/비제어 상태
//     value?: FilterId[] // single도 일관성 유지를 위해 배열(0~1개)
//     defaultValue?: FilterId[]
//     onFilterChange?: (selected: FilterId[]) => void

//     // UI
//     variant?: FilterVariant // 기본: 'tag'
//     clearable?: boolean // 기본: true
//     showSelectedCount?: boolean // 기본: true
//     placeholder?: string // dropdown용
//     size?: 'sm' | 'md' | 'lg' // 기본: 'md'
//     disabled?: boolean
//     className?: string
//     ariaLabel?: string

//     // 옵션 렌더 커스터마이즈
//     renderOption?: (args: {
//         option: FilterOption
//         selected: boolean
//         toggle: () => void
//         mode: FilterMode
//     }) => React.ReactNode

//     dataTestId?: string
// }

// 공통 타입: 어디서든 재사용 가능
export interface FilterOption {
    id: string // 식별자 (e.g. "novel", "essay")
    label: string // 표시 텍스트 (e.g. "소설", "에세이")
}

export type FilterMode = 'single' | 'multi'
export type FilterVariant = 'tag' | 'checkbox' | 'select'

export interface FilterComponentProps {
    options: FilterOption[]

    /** 선택 모드: 단일/다중 (기본: 'multi') */
    mode?: FilterMode

    /** UI 스타일: pill 태그, 체크박스, 드롭다운 (기본: 'tag') */
    variant?: FilterVariant

    /** 제어형 값 (넘겨주면 내부 상태 대신 이 값으로 렌더) */
    value?: string[]

    /** 비제어형 초기값 */
    defaultValue?: string[]

    /** 선택 변경 콜백 (매번 선택/해제 때 호출) */
    onChange?: (selected: string[]) => void

    /** 선택 개수 표기 여부 (기본: true) */
    showCount?: boolean

    /** Clear All 버튼 표시 여부 (기본: true) */
    clearable?: boolean

    /** 필요 시 외부 클래스 */
    className?: string
}
