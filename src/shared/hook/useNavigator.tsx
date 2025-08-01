import { useCallback } from 'react'
import { useNavigate } from 'react-router'

export const useNavigator = () => {
    const navigate = useNavigate()

    /**
     * Navigate 함수
     * TODO : 이것 저것 Service Logic 추가 예정
     */
    const _navigate = useCallback((path: string) => {
        navigate(path)
    }, [])

    return {
        navigate: _navigate,
    }
}
