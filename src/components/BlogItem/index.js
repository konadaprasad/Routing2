import './index.css'

const BlogItem = props => {
  const {items} = props
  const {title, description, publishedDate} = items
  return (
    <li className="list-item">
      <div className="cont">
        <h1 className="head">{title}</h1>
        <p className="para1">{publishedDate}</p>
      </div>
      <p className="para1">{description}</p>
      <hr className="line" />
    </li>
  )
}
export default BlogItem
