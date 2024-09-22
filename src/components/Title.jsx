import TextLine from "./TextLine";

const Title = () => {
  return (
    <div className="text-slate-600 text-start p-6 mr-10">
      <TextLine classes="text-6xl font-black" text="COUNSELING" />
      <TextLine classes="text-6xl font-black" text="SERVICES" />
      <TextLine classes="text-4xl font-thin my-3" text="Marica Nicholas" />
      <TextLine classes="text-3xl" text="Licensed" />
      <TextLine classes="text-3xl" text="Professional" />
      <TextLine classes="text-3xl" text="Counselor" />
      <TextLine classes="text-3xl" text="Associate" />
      <TextLine classes="text-lg mt-3" text="Supervised by: Megan McCarty, LPC-S" />  
      </div>
  );
};

export default Title;
