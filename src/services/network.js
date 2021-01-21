
export default class Network {
  constructor() {
    // this._apiBase = 'http://localhost:3000'; --> local
    this._apiBase = 'https://rs-demo-be1.herokuapp.com'; // --> heroku
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}; received ${res.status}`);
    }

    return await res.json();
  }

  getAllPosts = async () => {
    const res = await this.getResource('/posts/')
    console.log(res);
    return res;
  }

  // getAllPhotos = async () => {
  //   const res = await this.getResource('/posts/')
  //   return res.map(this._transformPosts)
  // }

  // _transformPosts = (post) => {
  //   return {
  //     src: post.src,
  //     alt: post.alt,
  //   }
  // }
}