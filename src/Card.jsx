import PropTypes from 'prop-types';



export default function Card({title, icon, link , thumbnail, date}) {
    return (
        <>
           <a href={link}>
<div className="card mx-auto flex flex-col items-center gap-y-2   sm:flex-row sm:justify-around rounded-md py-4 px-5 max-w-[600px] hover:bg-slate-50 bg-white">
    <div className="left flex flex-col justify-between  gap-y-3">
      <div className="iconAndSource flex justify-center sm:block">
        <img src={icon} 
        className=" rounded-md w-52 h-8 sm:w-40 sm:h-11  "/>
      </div>
      <div className="title text-center sm:text-left">
        <span>{title}</span>
      </div>
      <div className="dateAndTime text-center sm:text-left">
        <span>{date}</span>
      </div>
    </div>
    <div className="right order-first sm:order-last">
        <img src={thumbnail} alt="thumbnail"
        className="w-48 h-40 rounded-md "/>
    </div>
</div>
</a>
        </>
    )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
