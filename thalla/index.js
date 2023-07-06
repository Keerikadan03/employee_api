document.addEventListener('DOMContentLoaded', function() {
    const data = [];
    const suggestionsDiv = document.getElementById('suggestionsDiv');
    const searchInput = document.getElementById('searchInput');
  
    function fetchData() {
      fetch("https://dummy.restapiexample.com/api/v1/employees")
        .then((response) => response.json())
        .then((result) => {
          data.push(...result.data);
          renderSuggestions();
        });
    }
  
    function filterData(input) {
      return data.filter((employee) =>
        employee.employee_name.toLowerCase().includes(input.toLowerCase())
      );
    }
  
    function renderSuggestions() {
      const input = searchInput.value;
      const filteredData = filterData(input);
      const suggestions = filteredData
        .map((employee, index) => `<div key="${index}">${input != data.find ? employee.employee_age : ""}</div>`)
        .join("");
  
      suggestionsDiv.innerHTML = suggestions;
    }
  
    searchInput.addEventListener('input', renderSuggestions);
  
    fetchData();
  });
  