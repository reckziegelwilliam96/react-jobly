import React from "react";
import CompanyList from "./CompanyList"
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

const Companies = ({companies: initialState}) => {
    const [companies, setCompanies] = useState(initialState);

    const getFilteredCompanies = async (search) => {
        const filteredCompanies = await JoblyApi.getCompanies({q: search});
        setCompanies(filteredCompanies);
      };

      return (
        <div className="CompanyList">
          <div className="CompanyList-searchform">
            <SearchForm onSubmit={getFilteredCompanies} />
          </div>
          <div className="CompaniesList-list">
            <CompanyList companies={companies} />
          </div>
        </div>
      );
    };

export default Companies;