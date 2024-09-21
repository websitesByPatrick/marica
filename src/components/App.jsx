
import ListTitle from "./ListTitle";
import BulletPoint from "./BulletPoint";
import "../assets/css/app.css";
import Header from "./Header";

function App() {
  return (
    <>
      {/* define background of application */}
      <div >

        <Header />


        <div className="bg-slate-600">
          <ListTitle title="Specialities" />
          <div className="flex place-content-around">
            <BulletPoint
              items={[
                "Anxiety",
                "Christian",
                "Anger",
                "Play Therapy",
                "Trauma",
              ]}
            />
            <BulletPoint
              items={[
                "Autism",
                "Children",
                "Depression",
                "Geriatric",
                "Domestic Violence",
              ]}
            />
            <BulletPoint
              items={[
                "Autism",
                "Children",
                "Depression",
                "Geriatric",
                "Domestic Violence",
              ]}
            />
          </div>
        </div>

        <div className="bg-slate-600">
          <ListTitle title="Insurance Accepted" />
          <div className="flex place-content-around">
            <BulletPoint items={["Aetna"]} />
            <BulletPoint items={["Cigna"]} />
            <BulletPoint items={["Sliding Scale"]} />
          </div>
        </div>

        <div className="bg-slate-600">
          <ListTitle title="Biography" />
          <div className="flex place-content-around">
            <BulletPoint
              items={["Licensed Professional Councelor - Associate #95215"]}
            />
          </div>
        </div>

        <div className="bg-slate-600">
          <ListTitle title="Certifications" />
          <div className="flex place-content-around">
            <BulletPoint
              items={["Licensed Professional Councelor - Associate #95215"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
