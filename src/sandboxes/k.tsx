// class Template extends Component<any, any> {
//   componentDidMount() {
//     console.log('painted')
//   }

//   render() {
//     return h(this.props.tag, this.props.props || {})
//   }
// }

// const y = (tag, props, children) => {
  
//   const setting = { tag, props, children }

//   return h(Template, setting, children)
// }

// const App = () => {
//   const [v, s] = useState('')

//   return <div>
//     { y('input', { onInput: e => s(e.target.value), value: v, p: v}, []) }
//     <div>Something<b>{v}</b></div>
//   </div>
// }

// render(
//   h(App, {}),
//   document.body
// )
