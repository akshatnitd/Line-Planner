describe("Report Cursor Position", function () {
  describe("Report Cursor Latitude", function () {
    let latitude = document.getElementById("cursorLat");
    let latCheck = isFinite(latitude);
    it("Should be a number", function () {
      expect(latCheck).toBe(true);
    });
  });
  describe("Report Cursor northing", function () {
    let northing = document.getElementById("cursorNorthing");
    let northCheck = isFinite(northing);
    it("Should be a number", function () {
      expect(northCheck).toBe(true);
    });
  });
});
