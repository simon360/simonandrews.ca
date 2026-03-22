declare module "class-names" {
  function classNames(
    ...args: (
      | string
      | number
      | boolean
      | null
      | undefined
      | Record<string, unknown>
    )[]
  ): string
  export = classNames
}
