import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const NewsCard = ({ news }) => {
    const {
        _id,
        title,
        author,
        details,
        rating,
        total_view,
        image_url,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md mb-6">
            <div className="flex items-center gap-4 p-4">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-sm">{author.name}</p>
                    <p className="text-xs text-gray-500">{author.published_date.split(' ')[0]}</p>
                </div>
            </div>

            <figure>
                <img src={image_url} alt={title} className="w-full px-2 object-cover" />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-700">
                    {details.length > 200 ? details.slice(0, 200) + '...' : details}
                </p>
                <Link
                    to={`/news/${_id}`}
                    className="text-primary font-medium mt-2 inline-block hover:underline"
                >
                    Read More
                </Link>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-orange-400">
                        <AiFillStar className="mr-1" />
                        <span>{rating.number}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <FaEye className="mr-1" />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;