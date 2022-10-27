import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';

import { getLastPost, getRecentPosts } from '../services';

const LatestPost = () => {

    const [latestPost, setLastPost] = useState([]);

    useEffect(() => {
        getLastPost()
            .then(result => {
                setLastPost(result)
            }).catch(error => console.log("error"));

    }, []);

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 grid-flow-col bg-white rounded-lg p-8 mb-8">
            {latestPost.map((post) => {
                return (
                    <div key={post.title}>
                        <div className="rounded-lg text-gray h-42 mb-2 px-2 pb-8 align-items-center block">
                            <div className="relative text-right align-right text-xs py-2">
                                <span className="">By {post.author.name}</span>
                            </div>

                            <div className="relative text-right text-xs">
                                <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                            </div>
                            <img
                                alt={post.author.name}
                                height="30px"
                                width="30px"
                                align="right"
                                className="rounded-full m-1"
                                src={post.author.photo.url}
                            />
                            <div className="relative text-left">
                                <h1 className="text-white-700 font-bold">{post.title}</h1>
                            </div>
                            <div className="relative text-left m-1">
                                {post.categories.map((slug) => { return <span key={slug.name} className="text-xs text-white rounded-lg p-1 bg-gradient-to-r from-cyan-500 to-blue-500 italic m-1">{slug.name}</span> })}
                            </div>
                            <div className="relative overflow-hidden shadow-md pb-60 mb-2 mt-4">
                                <img
                                    src={post.featuredImage.url}
                                    alt={post.title}
                                    className="object-top absolute w-full object-cover shadow-lg rounded-t-lg lg:rounded-l"
                                />
                            </div>
                        </div>

                        {post.content.raw.children.map((typeObj, index) => {
                            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                            return getContentFragment(index, children, typeObj, typeObj.type)
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default LatestPost;