import React, { Component } from 'react';

import Profile_1 from '../assets/Profile_1.jpg'
import Profile_2 from '../assets/Profile_2.jpg'
import Profile_3 from '../assets/Profile_3.jpg'
import Profile_4 from '../assets/Profile_4.jpeg'
import Profile_5 from '../assets/Profile_5.jpg'
import flat_earth from '../assets/flat_earth.jpg'

import PostItem from '../components/PostItem'

class PostList extends Component { 
  state = {
    posts: [
        {
          id: 1,
          user: {
            name: 'Mário Nunes',
            avatar: Profile_1,
          },
          date: "Fev 04 2020",
          content: "Hi everybody, what are you doing?",
          postImg: flat_earth,
          comments: [
          { 
            id: 2,
            author: {
              name: 'Josh Berg',
              avatar: Profile_2,
            },
            content: 
            "Learning CSS!",
          }
        ]   
      },
      {
        id: 3,
        user: { 
          name: 'Alex Sandler',
          avatar: Profile_3
        },
        date: "Fev 03 2020",
        content: "Oh man... what a boring day!",
        comments: [
          {
            id:4,
            author: { 
              name: 'Mark Fin',
              avatar: Profile_4
            },
            content:
            "For sure... Sunday is always boring"
          }
        ]
      },
      {
        id: 5,
        user: {
          name: 'John Strong Muller',
          avatar: Profile_5
        },
        date: "Fev 03 2020",
        content: "Hm.. should i put a profile image?",
        comments: [
          {
            id:4,
            author: {
              name: 'Mark Fin',
              avatar: Profile_4
            },
            content: "No."
          },
          {
            id: 2,
            author: {
              name: 'Josh Berg',
              avatar: Profile_2,
            },
            content: 
            "Yes, please, no",
          },
          {
            id: 5,
            author: {
              name: 'John Strong Muller',
          avatar: Profile_5
            },
            content: 
            "Okay :c",
          }
        ]
      }
    ]
  };

  render() {
    return  (
      <div className = "postlist"> 
        {this.state.posts.map(posts => (<PostItem key ={posts.id} {...posts}/>
        ))}
      </div>
    )
  }
}

export default PostList