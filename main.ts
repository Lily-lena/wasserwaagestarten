let knopf_a_counter = 0
let Text_angezeigt = 0
let Start = 0
Start += storage.getNumber(StorageSlots.s1)
if (Start == 0) {
    Start += 1
    storage.putNumber(StorageSlots.s1, Start)
    Text_angezeigt = 0
    knopf_a_counter = 0
    if (Text_angezeigt == 0) {
        if (!(input.buttonIsPressed(Button.A))) {
            basic.showString("Zum Start: drücke A")
            Text_angezeigt += 1
        } else {
            knopf_a_counter += 1
        }
    } else {
        control.waitForEvent(knopf_a_counter, 1)
    }
} else if (Start == 1 || Start == 2) {
    Start += 1
    storage.putNumber(StorageSlots.s1, Start)
} else {
    storage.removeNumber(StorageSlots.s1)
}
basic.forever(function () {
    control.reset()
})
