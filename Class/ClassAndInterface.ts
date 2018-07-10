/**
 * Same like java.
 * Use the keyword 'implements'
 */

interface LivingBeing { 
    mass: number
    lifespan: number
    isAlive(): boolean
}

class Person implements LivingBeing { 
    mass: 4
    lifespan: 10
    isAlive(): boolean { 
        if (this.lifespan < 20)
            return true
        return false
    }
}