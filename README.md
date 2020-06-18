# ts kata goals

- [ ] simple types via method parameters; `kata1.test.ts`
  * number, string, boolean, any
- [ ] object types
- [ ] optional fields
- [ ] `enum`
- [ ] function types
- [ ] `interface`
- [ ] `extend` another type
- [ ] types that `omit` a field from another type
  *  `export type WithoutId<T extends HasId> = Omit<T, "id">;`
- [ ] whatever this is:
    ```ts
    export type LabelsFor<T> = {
      [key in keyof T]: T[key] extends object ? LabelsFor<T[key]> : string | LabelDefinition | null
    }
    ```