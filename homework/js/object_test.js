class Computer {
    name;
    year;
    processorName;
    memorySizeInGb;
    ssdSizeInTb;
    operatingSystemName;

    constructor(name) {
        this.name = name;
    }

    turnOn() {
        console.log(`turning on computer...`);
    }

    turnOff() {
        console.log(`turning off computer...`);
    }

    restart() {
        console.log(`restarting computer...`);
        this.turnOff();
        this.turnOn();
    }
}

//(function(){
    let computer = new Computer(`MacBook Pro`);
    computer.memorySizeInGb = 32;
    computer.year = 2023;
    //computer.name = `MacBook Pro`;
    computer.processorName = 'M2';
    computer.ssdSizeInTb = 1;
    computer.operatingSystemName = "MacOS Sonoma 14.11"
    computer.restart()

    console.log(computer);
//})()