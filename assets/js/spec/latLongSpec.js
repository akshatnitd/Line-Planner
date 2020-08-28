describe("Report Cursor Position", function () {
  describe("Report Cursor Latitude", function () {
    let e = { lngLat: { lng: -2.7371653049319775, lat: 53.44719478193824 } };
    it("Should return a floating point", function () {
      expect(reportCursorPos() {
          let latitude = JSON.stringify(e.lngLat["lat"]);
        })
      ).toBe(53.44719478193824);
    });
  });
});
