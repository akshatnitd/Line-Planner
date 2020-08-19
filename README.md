<img src="assets/images/linePlannerLogoRev00.png">

## Contents

---

1. UX Design
2. Features
3. Technologies Used
4. Testing
5. Deployment
6. User Guide
7. Credits
8. Contributing
9. Support
10. License

## UX Design

---

The Line Planner site was designed around User Experience Design
Principles. Target users were identified and business and user
goals were defined. A minimum viable product was determined that
could achieve these goals. Future development potential was also
mapped out. The scope was set to ensure the project remained
concise and fit the strategy, and the structure reflected this
scope whilst identifying the various APIs and technologies that
would be used in the initial site version, as well potential future
expansion. The skeleton of the site was defined using wireframe models,
which assisted in making key design decisions and targets prior to
commencing site construction, including site responsiveness considerations.
Surface design was considered to identify suitable look and feel for this site,
which is aimed at a mainly professional audience.

A review meeting was held following the initial UXD process which refined some
areas including suitable API technologies and the scope of the project.

### Strategy

The following stakeholders and their goals were identified:

#### The Business

- Create a simple, intuitive line planning and survey duration estimate platform which uses familiar front-end elements e.g. Google Maps.
- Allow users to import specific file types, create new files and add and alter elements/features within existing and new files.
- Provide a simple, semi-automated summary of calculated statistics for the line plan, including distance, number of lines, and expected duration.
  - Make it very clear what data has been included and omitted to calculate this.
- Ensure the platform could be expanded for more complex use in the future.

#### Target Users/Customers

This product is intended as an internal business or B2B tool with the aim to provide commercial/tendering and bidding departments
within survey companies such as Hydrographic or Aerial with a tool that can produce technically challenging outputs without the
requirement to be highly skilled with techincal software such as CAD or GIS packages. The tool is designed for first stage survey
tender submission where indicative costs (dictated by survey duration) estimates are required by the client. At this early potential
survey project stage the estimatation process must be quick, easy and ituitive but retain a high degree of accuracy to ensure confidence
in the bid. Any outputs from this tool should be able to be handled by techincal departments in more advanced software should the project
progress.

#### User goals

As a tender coordinator within a survey company there is a requirement to quickly produce a quote for works on potential bids. A key
component of this is an estimate of survey duration. Survey duration is affected by a number of factors which include the number of lines
and the total line distance to acquire. In order to calculate this an indicative survey line plan is required. However traditionally this
must be completed by specialist technicians on bespoke software. Relying on this resource present issues with staff availability vs deadlines
and cost of the bespoke software license. In many instances a simple preliminary plan will suffice and if the coordinator is able to perform
this task independently with confidence in their potentially limited technical skillset the bid can be more robust and submitted in a timely
manner.

As a sole trader operating a small Remotely Piloted Vehicle survey service the overheads of purchasing bespoke CAD/GIS software and the cost
of spending time training and developing skills to use them are often prohibitive. A simple, cheap solution with a quick rate of learning and
familiar feel is ideal to create flightpaths and waypoints to load into UAV software.

As a skilled technically competent member of a survey company there is a requirement for the commercial team to correctly bid a project to
prevent unexpected increased to project durations and costs once the bid is won and the technical team create the final operational plan. If the
technical team can be provided a draft line plan which they have confidence in most of its particulars in an easy to handle file format then it
can be more closely adhered to and modified for use in the field.

#### Opportunity

An opportunity importance vs feasibility assessment was carried out to inform on decisionns regarding the Minimum Viable Product:
[Opportunity Assessment Analysis](assets/docs/opportunityAssessment.pdf)

#### Minimum Viable Product

- A web hosted platform which is interactive in a single, unsavable session to the user.
- Present a base map which the user can add elements and features on top of.
  - Allow click drawing of polylines and polygons on the map.
  - Allow simple text files with coordinates in a specified format to be imported into a GeoJSON and displayed on the map.
  - Allows elements to be created based on other elements.
  - Allows elements to be edited based on other elements.
- Coordinates are stored in JSON format as a GeoJSON.
  - Coordinates are also projected from Lat/Long to Easting and Northing (UTM Zones).
  - Coordinates are displayed in realtime to the user in both Geographic and Projected Formats
  - Coordinates can be removed as well as added.
  - Coordinates can be exported in a simple text format in both Geographic and Projected Formats.
  - The user clearly understands the limited input/output coordinate systems and expected formats.
- A summary of key statistics is calculated based on the elements loaded/drawn onto the map via the temporary GeoJSONs.

### Scope

The scope of the initial project version is to create a non-persistent single page interface which offers
the user guidance, hints and tips to upload or create a basic polygon and draw and generate polyines with 2x
vertices on top of a digital map or satellite imagery workspace. The site will calculate some base statistics
on the polygons and polylines and these features are exportable in a basic text format.

- Single Page Design
  - No Navbar
  - A Logo which hovers over the Top Left of all content on the page
  - A modal boots on start-up offering an introduction and explanation
  - The entire page is dedicated to a Map API.
    - With the exception of a minimal footer.
  - Collapsible containers which draw over the Map API to allow user input such as loading and entering data, exporting data and viewing outputs.
  - Some core map manipulation tools presented as hovering buttons over the map.

### Structure

### Skeleton

### Surface

## Features

---

### Existing Features

### Minor Improvements

### Future Features

- Ability to handle a variety of file formats.
- Ability to save sessions locally or on the server to be loaded again later following closing of the site.
- Ability to load and create multiple files (plans and boundaries).
- More advanced drawing options (extending and cropping).
- Ability to handle, transform a project into a variety of coordinate systems and geodetics.

## Technologies Used

---

### Bootstrap

### JQuery

### Mapbox

### LogoMakr

### Google Fonts

### Font Awesome

## Testing

---

### Jasmine

### Browser Compatibility

### Responsiveness

### Geodetics

### User Stories

### W3C HTML Validator

## Deployment

---

### Current Version

### Version History

## User Guide

---

## Credits

---

### Content

### Media

### Acknowledgements

## Contributing

---

## Support

---

## License

---
