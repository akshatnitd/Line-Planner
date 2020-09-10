describe("Report Cursor Position", function () {
  describe("Report Cursor Latitude", function () {
    let latitude = document.getElementById("cursorLat");
    let latCheck = isFinite(latitude);
    it("Should be a number", function () {
      expect(latCheck).toBe(true);
    });
  });
});
