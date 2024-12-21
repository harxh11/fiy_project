export default function Home() {
  return (
    <div className="flex justify-between items-center overflow-hidden mt-11 w-full px-[110px]">
      <div className="w-full">
        {/* Main Heading of Home Page */}

        <div className="flex justify-center">
          <div className="my-4 gap-5 text-center">
            <h1 className="font-medium text-[40px] mt-5">
              Welcome to DecentraVote
            </h1>
            <p className="px-44 opacity-80">
              The Transparent Elections project introduces a novel framework for
              electoral processes by implementing a decentralized voting
              solution that utilizes blockchain and cloud technologies. This
              approach addresses critical challenges in traditional voting
              methods by ensuring enhanced security, privacy, and transparency
              throughout the election lifecycle.
            </p>
          </div>
        </div>

        {/* Buttons Section */}

        <div className="flex gap-[50px] justify-center">
          <button className="bg-[rgb(4,119,183)] text-white px-3 py-2 rounded-[10px] text-[20px] hover:bg-[rgb(15,63,129)] transition">
            Create Account
          </button>
          <button className="bg-[rgb(4,119,183)] text-white px-3 py-2 rounded-[10px] text-[20px] hover:bg-[rgb(15,63,129)] transition">
            Cast Vote
          </button>
        </div>

        {/* Feature Component */}

        <div>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit
            nisi aliquam veniam adipisci similique necessitatibus, error tenetur
            ipsum, numquam, iste omnis repudiandae deserunt quibusdam nihil
            autem beatae illum facere.
          </p>
        </div>
      </div>
    </div>
  );
}
