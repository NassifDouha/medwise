export interface Meal {
    id: number;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
}

export interface Nutrients {
    calories: number;
    protein: number;
    fat: number;
    carbohydrates: number;
}

export interface DailyMeal {
    meals: Meal[];
    nutrients: Nutrients;
}

export interface WeekPlan {
    week: {
        monday: DailyMeal;
        tuesday: DailyMeal;
        wednesday: DailyMeal;
        thursday: DailyMeal;
        friday: DailyMeal;
        saturday: DailyMeal;
        sunday: DailyMeal;
    };
}