import { Tab, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ArrowsClockwise, Spinner } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../hooks'

interface Meal {
    [x: string]: any
    idMeal: string
    strMeal: string
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
    strYoutube: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strIngredient5: string
    strIngredient6: string
    strIngredient7: string
    strIngredient8: string
    strIngredient9: string
    strIngredient10: string
    strIngredient11: string
    strIngredient12: string
    strIngredient13: string
    strIngredient14: string
    strIngredient15: string
    strIngredient16: string
    strIngredient17: string
    strIngredient18: string
    strIngredient19: string
    strIngredient20: string
    strMeasure1: string
    strMeasure2: string
    strMeasure3: string
    strMeasure4: string
    strMeasure5: string
    strMeasure6: string
    strMeasure7: string
    strMeasure8: string
    strMeasure9: string
    strMeasure10: string
    strMeasure11: string
    strMeasure12: string
    strMeasure13: string
    strMeasure14: string
    strMeasure15: string
    strMeasure16: string
    strMeasure17: string
    strMeasure18: string
    strMeasure19: string
    strMeasure20: string
}

export function Meal() {
    const [food, setFood] = useState<Meal[]>([])
    const [isLoading, setIsLoading] = useState(true)

    function getApi() {
        setIsLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((res) => res.json())
            .then((data: { meals: any }) => {
                setFood(data.meals)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getApi()
    }, [])

    const size = useWindowSize()

    const tabClassname = (selected: boolean) =>
        clsx(
            'w-full rounded p-2 focus:outline-none hover:bg-orange-400 hover:text-white duration-150 border border-orange-400',
            selected ? 'bg-orange-400 text-white' : 'text-orange-400'
        )

    function Ingredient({
        Ingredient,
        Measure,
    }: {
        Ingredient: any
        Measure: any
    }) {
        if (!Ingredient) return null

        return (
            <>
                <div className="flex justify-between">
                    <div className="capitalize">{Ingredient}</div>
                    <div>{Measure}</div>
                </div>
                <hr className="border-t-neutral-900/20" />
            </>
        )
    }

    function Instructions({
        strYoutube,
        strInstructions,
    }: {
        strYoutube: Meal['strYoutube']
        strInstructions: Meal['strInstructions']
    }) {
        return (
            <div className="w-full space-y-2">
                <a
                    href={strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-orange-400 underline"
                >
                    See guide
                </a>
                <div className="whitespace-pre-wrap">{strInstructions}</div>
            </div>
        )
    }

    return (
        <>
            <Transition
                show={isLoading}
                enter="duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="container mx-auto flex min-h-screen flex-1 items-center justify-center px-4 py-6 ">
                    <Spinner
                        className="animate-spin text-4xl text-orange-400"
                        weight="bold"
                    />
                </div>
            </Transition>

            <Transition
                show={!isLoading}
                enter="duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="container mx-auto px-4 py-12">
                    {food.map((food) => {
                        return (
                            <div key={food.idMeal} className="space-y-12">
                                <button
                                    onClick={getApi}
                                    className="mx-auto flex items-center space-x-2 rounded-full bg-orange-300 px-6 py-2 text-center text-sm duration-150 hover:bg-orange-400"
                                >
                                    <span>
                                        Didn&apos;t like the recipe? Try again
                                    </span>
                                    <ArrowsClockwise
                                        weight="bold"
                                        className="flex-none"
                                    />
                                </button>

                                <div>
                                    <div className="text-center text-3xl font-bold">
                                        {food.strMeal}
                                    </div>
                                    <div className="flex justify-center gap-12">
                                        <div>
                                            <b>Category: </b>
                                            <span>{food.strCategory}</span>
                                        </div>
                                        <div>
                                            <b>Area: </b>
                                            <span>{food.strArea}</span>
                                        </div>
                                    </div>
                                </div>

                                <img
                                    src={food.strMealThumb}
                                    alt={food.strMeal}
                                    className="mx-auto h-80 w-80 rounded-full"
                                />

                                {size.width! > 1024 ? (
                                    <div className="flex gap-12">
                                        <div className="flex-shrink-0 flex-grow-0 basis-[500px] space-y-4">
                                            <b className="text-xl">
                                                Ingredients
                                            </b>
                                            <div className="space-y-2 text-sm">
                                                {[...Array(20)].map((_, i) => (
                                                    <Ingredient
                                                        key={i}
                                                        Ingredient={
                                                            food[
                                                                'strIngredient' +
                                                                    i
                                                            ]
                                                        }
                                                        Measure={
                                                            food[
                                                                'strMeasure' + i
                                                            ]
                                                        }
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-4">
                                            <b className="text-xl">
                                                Instructions
                                            </b>
                                            <Instructions
                                                strInstructions={
                                                    food.strInstructions
                                                }
                                                strYoutube={food.strYoutube}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <Tab.Group defaultIndex={0}>
                                            <Tab.List className="flex space-x-4">
                                                <Tab
                                                    className={({ selected }) =>
                                                        tabClassname(selected)
                                                    }
                                                >
                                                    Ingredients
                                                </Tab>
                                                <Tab
                                                    className={({ selected }) =>
                                                        tabClassname(selected)
                                                    }
                                                >
                                                    Instructions
                                                </Tab>
                                            </Tab.List>
                                            <Tab.Panels>
                                                <Tab.Panel>
                                                    <div className="space-y-2 font-mono text-sm">
                                                        {[...Array(20)].map(
                                                            (_, i) => (
                                                                <Ingredient
                                                                    key={i}
                                                                    Ingredient={
                                                                        food[
                                                                            'strIngredient' +
                                                                                i
                                                                        ]
                                                                    }
                                                                    Measure={
                                                                        food[
                                                                            'strMeasure' +
                                                                                i
                                                                        ]
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <Instructions
                                                        strInstructions={
                                                            food.strInstructions
                                                        }
                                                        strYoutube={
                                                            food.strYoutube
                                                        }
                                                    />
                                                </Tab.Panel>
                                            </Tab.Panels>
                                        </Tab.Group>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </Transition>
        </>
    )
}
