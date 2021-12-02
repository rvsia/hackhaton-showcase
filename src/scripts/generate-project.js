const data = `
Blake Holifield;	Spot, cli for spotify written in Rust;Learn Rust by building a cli tool for spotify;Fun;;
Crystal Levy, Tahmid Efaz;	CarbonTracker;A web/mobile app to help individuals track their daily carbon footprint. This app will track daily individual carbon emissions from transportation, food, heating, purchases etc. The plan is to first work on a backend API if needed, and then the UI. If more people are involved, we can divide up the work.;Fun;;
Libor Pichler;	Macro Keyboard on Arduino;Aim is to develop Arduino-based device with own keyboard a display and possibility to map on key any action which is perfomed on laptop. Action can be - run any command, focus on app,run app, hot-key, shortcut, whatever,.... Device could also reflect state on display.;Fun;;
Eduardo Cerqueira, Rodrigo Rantues;	RH Data science platform;onboarding data hub infra and tools for data engineering and data analytics, learn more about Hue, Argo workflow, Ceph S3 and all others components provided by DH team, future POC integrating with QE automation;ConsoleDot;;
Eduardo Cerqueira;	Host data generator;Tool to generate hosts and data load to CRC RH Insights. For testing, monitoring, and observability purposes. Often I have seen requests for data load, this tool might be helpful for testing/validating platform services of new clusters as FEDRAMP, Pentest, app/data migrations, or adhoc tests.;ConsoleDot;;
Priscila Gutierres;	Unity/Arduino Puzzle;--;Fun;;
Kent Aycoth, Casey Williams;	Not a Star Wars game;A new manifest generator tool that can be easily modified for the needs of the ConsoleDot Security Engineers that does not depend on ProdSec's mangen on the backend. Providing a rich bill of materials of production-level deployments, services, components, RPMs, and modules. Along with the ability to output the aforementioned details into a file.;ConsoleDot;;
Štěpán Tomsa;	StreamDeck plugin;A prototype application for StreamDeck, a hardware HID device from Elgato. Something easy yet useful, what is already missing in the standard widget repository. A Pomodoro timer?;Fun;;
Ronny Pfannschmidt;	Pluggy benchmarks/diffs;pluggy is the plugin system/hook mechanism used by pytest, it appears as flat and all encompasing cost in most traces of pytest execution, i'd love the speedup;ConsoleDot
`

console.log(data.replace(/\n/g, '').replace(/\t/g, '').split(';;').map(project => project.split(';')).map(project => ({
    hackathon: 'August 2021',
    labels: [project[3]],
    name: project[1],
    description: project[2],
    authors: project[0].split(',').map(name => ({name: name.replace(/^ /, '')}))
})))
