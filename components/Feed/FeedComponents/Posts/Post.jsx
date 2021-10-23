import { BookmarkAltIcon, ChatIcon, DotsCircleHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"

import { HeartIcon as HearIconFilled } from "@heroicons/react/solid"
import { useSession } from 'next-auth/react'

function Post({id, username, userImg, img, caption}) {
    const { data: session } = useSession()
    return (
        <div className="bg-white my-7 border rounded-sm">

            {/*HEader*/}
            <div className="flex items-center p-5">
                
                <img src={userImg} alt=""
                className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
                
                <p className="flex-1 font-bold">{username}</p>
           
                <DotsCircleHorizontalIcon className="h-5"/>
           
            </div>
            

            {/*img*/}
            <img className="object-cover w-full" src={img} alt=""/>
            
            {/*Buttons*/}
            {session && (
                
                <div className="flex justify-between px-4 pt-4">

                    <div className="flex items-center space-x-4">
                        <HeartIcon className="btn"/>
                        <ChatIcon className="btn"/>
                        <PaperAirplaneIcon className="btn"/>
                    </div>

                    <BookmarkAltIcon className="btn"/>
                
                </div>
        
            )}
            

            {/*caption*/}
            <p className="p-5 truncate"><span className="font-bold mr-1">{username}</span>{caption}</p>


            {/*Comments*/}


            {/*input box*/}
            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7"/>
                    <input className="flex-1 border-none focus:ring-0 outline-none"
                    type="text"
                    placeholder="Add a Comment..."/>
                    <button className="font-semibold text-blue-400">Post</button>
                </form>
            )}
            
        </div>
    )
}

export default Post
