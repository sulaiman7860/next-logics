"use client"
import { useState } from "react"
import axios from "axios"

export default function Home() {

  const [state, setState] = useState(null)
  const [data, setData] = useState(null)
  const [followers, setFollowers] = useState([])
  const [followings, setFollowings] = useState([])

  const onChangeHandler = (e) => {
    setState(e.target.value)
  }
  const onClickHandler = async () => {
    let response = await fetch(`https://api.github.com/users/${state}`)
    response = await response.json()
    setData(response)
    console.log(response)
  }

  const onFollowers = async () => {
    let response = await axios.get(data.followers_url)
    console.log(response.data)
    setFollowers(response.data)
  }

  const onFollowing = async () => {
    let response = await axios.get(data.followers_url)
    console.log(response.data)
    setFollowings(response.data)
  }





  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="d-flex my-5">
              <input type="text" name="search" placeholder="Search" onChange={onChangeHandler} className="form-control w-75" />
              <button className="btn btn-success ms-2" onClick={onClickHandler}>Search</button>
            </div>
            {data &&
              <>
                <img src={data.avatar_url} width={100} alt="" />
                <h1>Github Data</h1>
                <h3>Boi: {data.bio}</h3>
                <h3>Name: {data.name}</h3>
                <h3>Followers: {data.followers} | Followings: {data.following}</h3>
                <button onClick={onFollowers} className="btn btn-info text-light">Get Followers</button>

              </>
            }
          </div>
          <div className="col-8 offset-2">
            {followers.length >= 1 &&

              <table>
                <tr>
                  <th>id</th>
                  <th>avator</th>
                  <th>name</th>
                  <th>type</th>
                </tr>
                {followers.map((element) => {
                  return (
                    <>
                    <tr>
                      <td>{element.id}</td>
                      <td> <img src={element.avatar_url} width={80} alt="" /></td>
                      <td>{element.login}</td>
                      <td> <button onClick={onFollowing} className="btn btn-warning text-light">Get Followers</button></td>
                    </tr>
                    <tr>
                      {followings.length >= 1 &&

                        <table>
                          <tr>
                            <th>id</th>
                            <th>avator</th>
                            <th>name</th>
                            <th>type</th>
                          </tr>
                          {followings.map((element) => {
                            return (
                              <tr>
                                <td>{element.id}</td>
                                <td> <img src={element.avatar_url} width={80} alt="" /></td>
                                <td>{element.login}</td>
                                <td> <button onClick={onFollowing} className="btn btn-warning text-light">Get Followers</button></td>
                              </tr>
                            )
                          })}

                        </table>
                      }
                    </tr>
                   </>
                  )
                })}

              </table>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
