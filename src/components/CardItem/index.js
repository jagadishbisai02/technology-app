// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {technologyDetails} = props
  const {title, description, imgUrl, className} = technologyDetails

  return (
    <li className={`${className} technology-cards`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="images">
          <img src={imgUrl} className="image-url" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default TechnologyCard
