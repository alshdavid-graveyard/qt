export class Writer {
  value: string = ""

  write(value: string) {
    this.value += value
  }

  get() {
    return this.value
  }
}