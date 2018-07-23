{
                        this.state.movieslist.map((item)=>
                <div className="movie-info" key={item.id}>
                     <div className="movie-title line-ellipsis">{item.nm}</div>
                     <div className="movie-desc line-ellipsis"></div>

                </div>
                          )
                     }