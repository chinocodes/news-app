import image from '../assets/news.png'

export const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height: "200px",width: "328px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Info about something that has just happend."}</p>
    <a href={url} className="btn btn-outline-info">Read More</a>
  </div>
</div>
  )
}
