function Educate() {
  return (
    <main>
      <header>
        <h1>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
        <span>3/3</span>
      </header>
      <section>
        <label htmlFor="saswavlebeli">სასწავლებელი</label>
        <input id="saswavlebeli" type="text" placeholder="სასწავლებელი" />
        <span>მინიმუმ 2 სიმბოლო</span>
      </section>
      <section>
        <div>
          <label htmlFor="xarisxi">ხარისხი</label>
          <input id="xarisxi" type="checkbox" />
        </div>
        <div>
          <label htmlFor="date">დამთავრების რიცხვი</label>
          <input id="date" type="date" />
        </div>
      </section>
      <div>
        <label htmlFor="description">აღწერა</label>
        <textarea name="" id="description" cols="30" rows="10"></textarea>
      </div>
    </main>
  );
}

export default Educate;
