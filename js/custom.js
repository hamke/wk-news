function savePDF() {
	const element = document.getElementById("html2pdf");
	html2pdf().from(element).save();
}
