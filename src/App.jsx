import Header from './components/Header';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      {/* HEADER-SECTION */}
      <Header />

      {/* HERO-SECTION */}
      <Hero />

      {/* DEVELOPERS AND EMPLOYERS */}
      <HomeCards />

      {/* BROWSE-JOBS */}
      <JobListings />

      {/* BROWSE-ALL-JOBS */}
      <ViewAllJobs />
    </>
  );
};

export default App;
