var serviceURL = "http://www.georgepecherle.com";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'load-taxi-phones.php', function(data) {
		$('#employeeList li').remove();
		companies = data;
		$.each(companies, function(index, company) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + company.id + '">' +
					'<img src="pics/' + company.poza + '"/>' +
					'<h4>' + company.nume + '</h4>' +
					'<p>' + company.descriere + '</p></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}
