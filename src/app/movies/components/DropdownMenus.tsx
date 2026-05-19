import Select from "@/components/ui/Select";

export function DropdownMenuDay() {
  return (
    <Select
      name="choose-day"
      id="choose-day"
      defaultValue=""
    >
      <option value="" disabled>
        Välj dag
      </option>

      <option value="idag">Idag</option>
      <option value="imorgon">Imorgon</option>
      <option value="onsdag">Onsdag</option>
      <option value="torsdag">Torsdag</option>
    </Select>
  );
}

export function DropdownMenuTime() {
  return (
    <Select
      name="choose-time"
      id="choose-time"
      defaultValue=""
    >
      <option value="" disabled>
        Välj tid
      </option>

      <option value="10:00">10:00</option>
      <option value="13:00">13:00</option>
      <option value="16:00">16:00</option>
      <option value="19:00">19:00</option>
    </Select>
  );
}