import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from 'react-native-heroicons/outline'

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-3xl font-bold text-red-100">Home Screen</Text>

      <AdjustmentsIcon />
      <ChevronDownIcon />
      <SearchIcon />
      <UserIcon />
    </SafeAreaView>
  )
}
