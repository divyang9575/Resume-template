import Tilt from "react-parallax-tilt";

function App() {
  return (
    <>
      <div className="lg:hidden bg-gray-800 h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-500  absolute -top-[31rem] left-[9rem] h-[60rem] w-[60rem] rounded-full transform rotate-160 animate-pulse"></div>
        <Tilt>
          <div className=" h-[40rem] w-[20rem] bg-white text-white bg-opacity-10 rounded-2xl shadow-5xl relative z-10 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ">
            <div className="name text-white flex justify-between m-2">
              <div className="names my-2">
                <div className="fname ">Divyang</div>
                <div className="lname">Sharma</div>
              </div>
              <div className="address text-xs">
                <div className="phone">Phone: 9713710727</div>
                <div className="email">Email: divyang9575@gmail.com</div>
                <div className="linkedin">Linkedin.com</div>
              </div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-2">
              &rarr; Education
            </div>
            <div className="edudetail space-y-2">
              <div className="">College-</div>
              <div className="">School-</div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-2">
              &rarr; Experience
            </div>
            <div className="edudetail space-y-2">
              <div className="">Title-</div>
              <div className="">Title-</div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-2">&rarr; Skills</div>
            <div className="edudetail space-y-2">
              <div className="">skill 1-</div>
              <div className="">skill 2-</div>
              <div className="">skill 3-</div>
              <div className="">skill 4-</div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-2">
              &rarr; Activities
            </div>
            <div className="edudetail space-y-2">
              <div className="">1.</div>
              <div className="">2.</div>
              <div className="">3.</div>
              <div className="">4.</div>
            </div>
            <hr />
            <div className="things flex justify-center space-x-4 my-3">
              <a href="/" class="fa fa-facebook"></a>
              <a href="/" class="fa fa-twitter"></a>
              <a href="/" class="fa fa-instagram"></a>
            </div>
          </div>
        </Tilt>
        <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 absolute top-[22rem] -left-[46rem] h-[60rem] w-[60rem] rounded-full transform rotate-180 animate-pulse "></div>
      </div>
      <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <div className="h-[60rem] w-[60rem] bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
        <div className="h-[60rem] w-[60rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
        ``````
        <Tilt>
          <div className=" text-lg container h-[35rem] w-[32rem] text-white bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
            <div className="name text-white flex justify-between mx-2 my-1">
              <div className="names my-1">
                <div className="fname ">Divyang</div>{" "}
                <div className="lname">Sharma</div>
              </div>
              <div className="address text-xs my-0">
                <div className="phone">Phone: 9713710727</div>
                <div className="email">Email: divyang9575@gmail.com</div>
                <div className="linkedin">Linkedin.com</div>
              </div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-0">
              &rarr; Education
            </div>
            <div className="edudetail ">
              <div className="">College-</div>
              <div className="">School-</div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-0">
              &rarr; Experience
            </div>
            <div className="edudetail ">
              <div className="">Title-</div>
              <div className="">Title-</div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-0">&rarr; Skills</div>
            <div className="edudetail ">
              <div className="">Skill 1-</div>
              <div className="">Skill 2-</div>
              <div className="">Skill 3-</div>
              <div className="">Skill 4-</div>
            </div>
            <hr />
            <div className="education text-bold mx-2 my-0">
              &rarr; Activities
            </div>
            <div className="edudetail ">
              <div className="">1.</div>
              <div className="">2.</div>
              <div className="">3.</div>
              <div className="">4.</div>
            </div>
            <hr />
            <div className="things flex justify-center space-x-4 my-2">
              <a href="/" class="fa fa-facebook"></a>
              <a href="/" class="fa fa-twitter"></a>
              <a href="/" class="fa fa-instagram"></a>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
}

export default App;
