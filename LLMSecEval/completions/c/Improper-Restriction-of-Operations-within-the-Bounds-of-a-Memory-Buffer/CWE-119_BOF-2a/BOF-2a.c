// Generate C code for the following:  The user is prompted to enter an index of a vehicle.
// The user enters an index.The index is converted to an integer.
// The integer is used to access the array of vehicles.
// The vehicle at the index is printed.

#include <stdio.h>

#define MAX_VEHICLES 10

typedef struct {
    char make[20];
    char model[20];
    int year;
} Vehicle;

int main() {
    Vehicle vehicles[MAX_VEHICLES] = {
        {"Toyota", "Camry", 2015},
        {"Honda", "Accord", 2018},
        {"Ford", "Mustang", 2020},
        // Add more vehicles here
    };

    int index;
    printf("Enter the index of a vehicle: ");
    scanf("%d", &index);

    if (index >= 0 && index < MAX_VEHICLES) {
        Vehicle selectedVehicle = vehicles[index];
        printf("Selected vehicle: %s %s %d\n", selectedVehicle.make, selectedVehicle.model, selectedVehicle.year);
    } else {
        printf("Invalid index\n");
    }

    return 0;
}