import React from 'react'

// const NotFoundPage = () => (
//   <div className="wrapper">
//     <div className="four-oh-four-page">
//       <h2 className="four-oh-four">404</h2>
//       <p className="four-oh-four-p">page not found</p>
//     </div>
//   </div>
// )

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.refs.wrapper.style.height = window.innerHeight + 'px'
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <div className="four-oh-four-page">
          <h2 className="four-oh-four">404</h2>
          <p className="four-oh-four-p">page not found</p>
        </div>
      </div>
    )
  }
}

export default NotFoundPage