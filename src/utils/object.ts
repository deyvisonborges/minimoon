export const uObject = {
  isEmpty: (value: object) => Object.keys(value).length <= 0 ?? true 
}