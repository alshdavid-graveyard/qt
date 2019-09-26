class Directive {
    selector = 'print'
    ref: HTMLElement

    afterViewInit() {
        // this.ref.addEventListener('click', () => console.log('hey'))
        console.log(this.ref)
    }
}