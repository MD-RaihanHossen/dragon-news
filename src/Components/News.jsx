import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = ({news}) => {

    

    const {
        title,
        author,
        thumbnail_url,
        total_view,
        rating,
        details,
    } = news;

    return (
        <div className="card bg-base-100 shadow-xl border p-5">
            <figure>
                <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-80 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">{details.slice(0, 200)}...</p>
                <div className="flex justify-between items-center mt-4">
                    {/* Author Info */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm font-medium">{author.name}</p>
                            <p className="text-xs text-gray-500">{new Date(author.published_date).toDateString()}</p>
                        </div>
                    </div>

                    {/* Views and Rating */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center text-gray-600 text-sm">
                            <FaEye className="mr-1" />
                            {total_view}
                        </div>
                        <div className="badge badge-success text-white">
                            {rating.badge}: {rating.number}
                        </div>
                    </div>
                </div>
                {/* Read More or Category Button */}
                <div className="card-actions mt-4">
                    <Link to={'/'} className="btn btn-sm btn-primary">All news in this category</Link>
                </div>
            </div>
        </div>
    );
};

export default News;