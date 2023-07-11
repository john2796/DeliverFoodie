import React, { useEffect, useState } from 'react'
import { ScrollView, Image, Text, TouchableOpacity } from 'react-native'

const dummyCategories = [
  {
    name: 'Sushi',
    image:
      'https://media.istockphoto.com/id/497022342/photo/japanese-restaurant-sushi-dish.jpg?s=1024x1024&w=is&k=20&c=rXcABwYw3550CWko16FgrNGhpNZuSR_0u0Zzp3pJIl8=',
    _id: 1,
  },
  {
    name: 'Sushi',
    image:
      'https://media.istockphoto.com/id/497022342/photo/japanese-restaurant-sushi-dish.jpg?s=1024x1024&w=is&k=20&c=rXcABwYw3550CWko16FgrNGhpNZuSR_0u0Zzp3pJIl8=',
    _id: 2,
  },
  {
    name: 'Sushi',
    image:
      'https://media.istockphoto.com/id/497022342/photo/japanese-restaurant-sushi-dish.jpg?s=1024x1024&w=is&k=20&c=rXcABwYw3550CWko16FgrNGhpNZuSR_0u0Zzp3pJIl8=',
    _id: 3,
  },
  {
    name: 'Sushi',
    image:
      'https://media.istockphoto.com/id/497022342/photo/japanese-restaurant-sushi-dish.jpg?s=1024x1024&w=is&k=20&c=rXcABwYw3550CWko16FgrNGhpNZuSR_0u0Zzp3pJIl8=',
    _id: 4,
  },
]

export default function Categories() {
  const [categories, setCategories] = useState([])

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {dummyCategories.map((category) => (
        <TouchableOpacity key={category._id} className="relative mr-2">
          <Image
            source={{
              uri: category.image,
            }}
            className="h-20 w-20 rounded"
          />
          <Text className="absolute bottom-1 left-1 text-white font-bold">
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
