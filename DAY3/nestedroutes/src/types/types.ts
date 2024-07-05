export class CourseModel {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public likes: number,
    public imageUrl: string,
    public description: string,
  ) {}
}

export interface CourseProps {
  coursedetails: CourseModel;
}

export interface RatingProps {
  numberofstars: number;
}
