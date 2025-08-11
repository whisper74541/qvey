import { CheckCircleRounded, ErrorRounded, InfoRounded, WarningRounded } from '@mui/icons-material'
import type { ToastType } from '../types'
import type { JSX } from 'react'

export const TOAST_ICON: Record<ToastType, JSX.Element> = {
    success: <CheckCircleRounded />,
    error: <ErrorRounded />,
    info: <InfoRounded />,
    warning: <WarningRounded />,
}
