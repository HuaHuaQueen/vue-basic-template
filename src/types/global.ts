import type { ResultCodeEnum } from '@/common/enums/ResultCodeEnum.ts'

declare global {
  interface AbstractResult<T = any> {
    code: ResultCodeEnum
    msg: string
    data: T
  }

  type Result<T = any> = AbstractResult<T>

  type PageResult<T = any> = AbstractResult<{
    records: T[]
    total: number
  }>
}
