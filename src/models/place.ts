export class Place {
  public id;
  constructor(
    public title: string,
    public imageUri: string,
    public address: string,
    public location: { lat: number; lng: number }
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
