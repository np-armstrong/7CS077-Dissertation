// Generate C code for the following:  The code creates an array of strings called vehicles.
// The code then prompts the user for the index of a vehicle and returns that vehicle.
// The code then loops through the array and prints out each vehicle.

#include <stdio.h>
#include <string.h>

#define MAX_VEHICLES 5
#define MAX_NAME_LENGTH 20

int main() {
    char vehicles[MAX_VEHICLES][MAX_NAME_LENGTH];
    int index;

    // Populate the array of vehicles
    strcpy(vehicles[0], "Car");
    strcpy(vehicles[1], "Motorcycle");
    strcpy(vehicles[2], "Truck");
    strcpy(vehicles[3], "Bicycle");
    strcpy(vehicles[4], "Scooter");

    // Prompt the user for the index of a vehicle
    printf("Enter the index of a vehicle: ");
    scanf("%d", &index);

    // Check if the index is within bounds
    if (index >= 0 && index < MAX_VEHICLES) {
        // Print the selected vehicle
        printf("Selected vehicle: %s\n", vehicles[index]);
    } else {
        printf("Invalid index\n");
    }

    // Loop through the array and print each vehicle
    printf("All vehicles:\n");
    for (int i = 0; i < MAX_VEHICLES; i++) {
        printf("%s\n", vehicles[i]);
    }

    return 0;
}