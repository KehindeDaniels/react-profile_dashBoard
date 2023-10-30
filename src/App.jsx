// import{ TheProfile, TheTable, Thefooter} from './sections/import'
import TheProfle from './sections/TheProfile';
import TableHeading from './sections/TableHeading';
import TableBody from './sections/TableBody';
import TheContact from './sections/TheContact';

const App = () => (
  <main className="">
    <section className="profile flex flex-col items-end gap-4 max-w-7xl mx-auto">
      <TheProfle />
      <TheContact />
    </section>

    <section className="table mt-16">
      <TableHeading />
      <TableBody />
    </section>
    
  </main>
);

export default App;