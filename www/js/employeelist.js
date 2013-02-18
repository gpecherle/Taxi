var serviceURL = "http://www.ionutgavris.com/mobile/phonegap-apps/taxi/";

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
					'<img src="pics/' + company.nume + '"/>' +
					'<h4>' + company.nume + '</h4>' +
					'<p>' + company.nume + '</p>' +
					'<span class="ui-li-count">' + company.nume + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}
